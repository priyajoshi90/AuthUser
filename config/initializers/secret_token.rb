# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
AuthenticateUser::Application.config.secret_key_base = 'da2d9f27edb98724158eb9352f7aa2d14d57205f51e7bd3e5937b62fc4ef5a66909c31f950f9c68166cbe97ecd06ad3249b605ca2d82c57f17e278ae029cf14a'
