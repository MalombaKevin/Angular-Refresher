# Node.js setup
+ Install NVM (Node Version Manager)
    * <span style="color:gold">sudo apt update && sudo apt install curl -y </span> <br>[make sure you have curl installed]
    * <span style="color:gold"> curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash</span>   <br>[ configure nvm on your system for current logged user.]
    * <span style="color:gold">source ~/.profile</span> <br> [Set the required environment variables to use nvm on the system.] => Debian
        + <span style="color:gold">source ~/.bashrc </span> => CentOS, Fedora and Redhat systems
+ Install Node.js
    * <span style="color:gold">nvm ls-remote</span> <br> [find the available version of Node.js to install]
    * <span style="color:gold">nvm install v16.14.0</span> <br>[install the version you want]
    * <span style="color:gold">nvm list</span> <br>[list installed version and default set version.]
    * <span style="color:gold">nvm use 17.5.0</span> <br>
    [change the default Node.js version]

    * <span style="color:gold">node --version </span> <br>[confirm the Node.js version]
    * <span style="color:gold">nvm run v16.14.0 quiz.js  </span> <br>[run app using specific Node.js version]
     * <span style="color:gold">nvm uninstall v9.5.0   </span> <br>[uninstall specific Node.js version]
<hr>

# Install watchman

<hr>

# Install Angular

+ npm install -g @angular/cli@11.2.6<br> [Install angular cli]
+ ng <br>[confirm installation]

<hr>

# Angular CLI commands
### create an angular application
 + ng new refresh <br>
 [creates an angular app called refresh]
### running angular app
 + cd refresh/ <br> [change directory to the app]
 + ng serve --open  [run the app]
    

