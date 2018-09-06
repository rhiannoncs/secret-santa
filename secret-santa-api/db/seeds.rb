user = User.new
user.name = 'Test User'
user.email = 'test@email.com'
user.password = 'testIt'
user.save

wish1 = Wish.new
wish1.user_id = 1
wish1.content = "A pony"
wish1.save

wish2 = Wish.new
wish2.user_id = 1
wish2.content = "World peace"
wish2.save

