import generateCode from "../utils/generateCode.js";
import urlModel from "../models/url.model.js";
import config from "../config/config.js";

const urlController = {
  create: async (req, res) => {
    try {
      const { url, alias } = req.body;

      const existingUrl = await urlModel.findOne({ originalUrl: url });

      if (existingUrl) {
        return res.status(200).json({
          success: true,
          message: "URL was already shortened.",
          data: {
            shortUrl: `${config.BASE_URL}/${existingUrl.shortCode}`,
            expiresAt: existingUrl.expiresAt,
          },
        });
      }

      const shortCode = alias || (await generateCode());

      if (alias) {
        const existingAlias = await urlModel.findOne({ shortCode: alias });

        if (existingAlias) {
          return res.status(409).json({
            success: false,
            message: "This alias is already taken",
          });
        }
      }

      const data = await urlModel.create({
        originalUrl: url,
        shortCode,
      });

      const shortUrl = `${config.BASE_URL}/${shortCode}`;

      return res.status(201).json({
        success: true,
        data: {
          _id: data._id,
          originalUrl: data.originalUrl,
          shortCode: data.shortCode,
          shortUrl,
          clicks: data.clicks,
          createdAt: data.createdAt,
          expiresAt: data.expiresAt,
        },
      });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(409).json({
          success: false,
          message: "This alias is already taken",
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const data = await urlModel.find({});
      return res.status(200).json({
        success: true,
        data: data.map((url) => {
          return {
            _id: url._id,
            originalUrl: url.originalUrl,
            shortCode: url.shortCode,
            shortUrl: `${config.BASE_URL}/${url.shortCode}`,
            clicks: url.clicks,
            createdAt: url.createdAt,
            expiresAt: url.expiresAt,
          };
        }),
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  redirect: async (req, res) => {
    try {
      const { shortCode } = req.params;
      const url = await urlModel.findOneAndUpdate(
        { shortCode },
        { $inc: { clicks: 1 } },
      );
      if (!url) {
        return res.status(404).json({
          success: false,
          message: "URL not found",
        });
      }
      return res.redirect(302, url.originalUrl);
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const url = await urlModel.findOneAndDelete({ _id: id });
      if (!url) {
        return res.status(404).json({
          success: false,
          message: "URL not found",
        });
      }
      return res.status(200).json({
        success: true,
        message: "URL deleted successfully",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  },
};

export default urlController;
