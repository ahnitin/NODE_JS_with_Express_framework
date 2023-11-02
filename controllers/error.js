exports.errorpage = (req,res,next)=>{
    res.status(404);
    res.render('404',{
        pageTitle:"Error Page",
        path: "",
    })
}