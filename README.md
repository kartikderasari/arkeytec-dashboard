# Arkeytec Dashboard 
A simple front-end admin application for speckle. 

The easiest way to use Arkeytec Dashboard is to navigate to https://app.speckle.systems and login at your server.  Data will strictly be transferred between the client (the app in your browser) and your server. <br> This works within private networks, amongst firewalls, etc. as long as you have a SSL certificate for your server (ie, non-https server adresses will not work).

## Fresh installation for a speckle server deployment
1. `cd ~/${your server install location}/plugins`
2. `git clone https://github.com/kartikderasari/arkeytec-dashboard.git`
3. `cd arkeytec-dashboard`
4. `npm install`
5. `npm run build`
6. `Restart your server, and navigate to its root address - done!`

### If you have previously installed the Arkeytec Dashboard frontend plugin, you should be able to just run the following commands from the plugin's folder 

1. `git fetch`
2. `git pull`
3. `npm install - to make sure to pull along any potential new dependencies`
4. `npm run build`

## Development notes
To start a development server: `npm run dev` <br>
To build for production: `npm run build`
