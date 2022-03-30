import Post from "../models/Post.js";
import PostService from "../services/PostService.js";

class PostController {
  async create(req, res) {
    try {
      const post = await PostService.create(req.body, req.files.picture);

      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await PostService.getAll();

      res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;

      const post = await PostService.getOne(id);

      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const post = req.body;

      const updatedPost = await PostService.update(id, post);

      res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const post = await PostService.delete(id);

      res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
