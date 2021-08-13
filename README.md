# Wchia-client
<br/>
       
## Build Step
---
```
// Install dependency
npm install

// Build for test station
npm run build:test

// Build for production
npm run build:prod
```

Package file path: ./dist/*

## Server configure
Nginx
```
server {
	listen 80;
	server_name server_name;
  	root /data/apps/dist;

	location / {
        index index.html index.htm;
		try_files $uri $uri/ @router;
    }

	location /rpc {
	       proxy_pass	api_host;       # http://143.198.64.14:4600
	       proxy_redirect	default;
	}
}
```

