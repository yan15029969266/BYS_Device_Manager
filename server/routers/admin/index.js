module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const mongoose = require('mongoose')
    //const resourceMiddleware = require('../../middleware/resource')
    const Category = mongoose.model('Category')
    const Users = mongoose.model('User')
    const Group = mongoose.model('Group')
    

    //app.use('/admin/api/rest/:resource', resourceMiddleware(), router)
    // 获取资源
    router.get('/getData', async (req, res) => {
        res.send("hello world")
    })

    router.get('/categories', async (req, res) => {
        console.log('---------')
        const data = await Category.find()
        res.send(data)
    })

    router.get('/test', async (req, res) => {
        // let group=new Group({ _id: new mongoose.Types.ObjectId(),groupname:"group1",desc:"888"})
        
        // group.save(function (err) {
        //     if (err) return handleError(err);
        //     let user = new Users({ _id: new mongoose.Types.ObjectId(),name:"test2",pwd:"123456",avatar:"my avatar",email:"7777",phone:"110",group_id:group._id})
        //     // saved!
        //     user.save(function(err){
        //         if (err) return handleError(err);
        //         console.log('66666666')
        //     })
            
        //   })
        const data = await Users.findOne({ name: /test2/i }).populate('group_id').exec(function (err, user) {
            if (err) return handleError(err);
            console.log('The author is %s', user.group_id.groupname);
            // prints "The author is Ian Fleming"
            console.log('The authors age is %s', user.group_id.desc);
            // prints "The authors age is null'
            res.send(user)
          });
        
        
    })
    router.post
    app.use('/admin/api/rest', router)
}