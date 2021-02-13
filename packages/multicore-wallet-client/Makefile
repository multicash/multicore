.PHONY: cover

BIN_PATH:=node_modules/.bin/

all:	multicore-wallet-client.js

clean:
	rm multicore-wallet-client.js

multicore-wallet-client.js: index.js lib/*.js
	${BIN_PATH}browserify $< > $@

cover:
	./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha -- --reporter spec test
