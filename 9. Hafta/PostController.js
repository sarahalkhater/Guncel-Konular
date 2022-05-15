const res = require("express/lib/response");
const Post = require("./Post");
const { post } = require("./router");
const PostService = require("./PostService")

const postService = new PostService()

class PostController {
    async create(post) {
        try {
            const post = await postService.create(req.body)
            res.json(post)
        } catch (error) {
            res.status(403).json(error)
        }
    }

    async getAll(req, res) {

        try {
            const posts = postService.getAll()
            return res.json(posts)
        } catch (error) {
            res.status(403).json(error)
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: "id not found" })
            }
            const post = await postService.getOne(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            if (!post._id) {
                res.status(400).json({ message: "id not found" })
            }

            // const old = await Post.findById(post._id)
            // old.author = post.author ? post.author : old.author // eski versiyon

            // const updatePost = await Post.findByIdAndUpdate(post._id, post, {new: true})//yeni versiyon
            const updatePost = await postService.update(post)
            return res.json(updatePost)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: "id not found" })
            }
            // const post = await Post.findByIdAndDelete(id)
            const post = await postService.delete(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = PostController