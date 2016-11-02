
function getHome(req, res, next) {
    res.render('index', { title: 'Send Olawale an SMS for free' });
}

function sendMessage(req, res){
    res.send("Message Sent")
}

module.exports = {
    getHome,
    sendMessage
}