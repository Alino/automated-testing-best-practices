module.exports = function() {
  this.Then(/^I should see a message "([^"]*)"$/, function (arg1) {
    client.waitForExist('.messageWorks', 500);
  });
};
