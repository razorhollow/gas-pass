import { Ticket } from '../models/ticket.js'
import { Profile } from '../models/profile.js'

function edit(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/edit', {
      profile,
      title: "Edit Permissions"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/admin")
  })
}

export {
  edit
}