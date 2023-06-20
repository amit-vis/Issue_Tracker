module.exports.home = async function(req, res){
    return res.render('home',{
        title: 'Issue tracker | Home'
    })
}