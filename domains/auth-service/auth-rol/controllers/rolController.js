const User = require('../models/userModel');
/**
 * 
 * @param {string} userIdOrUsername 
 * @returns {Promise<number|null>} 
 */
async function checkUserRole(userIdOrUsername) {
    let user;
    if (isNaN(userIdOrUsername)) {
        user = await User.findByUsername(userIdOrUsername);
    } else {
        user = await User.findById(userIdOrUsername);
    }
    if (!user) return null;
    return user.rol;
}

module.exports = { checkUserRole };
