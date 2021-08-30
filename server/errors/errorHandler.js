let errorHandler = (err, req, res, next) => {
    console.error(err)

    if(err instanceof ApiError) {
        res.status(err.code).json(err.msg)
        return
    }

    res.status(500).json({msg: "Something went wrong!"})
}

module.exports = errorHandler