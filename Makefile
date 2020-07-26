git:
	git add .
	git commit -m "$m"
	git push -u origin master
deploy:
	git pull
	npm i
	npm run build