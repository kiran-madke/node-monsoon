# SOP for deploying NODE Project on EC2

## 1. Run Putty Configuration
## 2. Go to Session Category
- Paste host name : 34.234.174.176
- Select SSH connection type
- Port 22
## 3. Go to SSH Category
- Select Auth
- Browse for your Putty Private Key
- Click open
## 4. Next time while reoppening just load your saved session
- login as : ec2-user
- type :  sudo bash

## 5. Install NVM
- check if nvm is installed : nvm --version
- if it is not installed then run the command : curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
- The script clones the nvm repository to ~/.nvm and adds the source line to your profile (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc). Now, run nvm --version. The terminal will show command not found as the code has been added to your profile but hasn’t run yet. It runs on every login, so login again by creating a new session. Run nvm --version again and this time you should be able to see the installed version of NVM.
- Close putty
- Reopen putty and load session

## 6. Install NODE
- To install node, you can either use nvm install node to install the latest version of node or use nvm install <node_version> to install a specific version of node. Once node is installed, you can check the installed version with node --version.

## 7. Install Git and clone repository from GitHub
- We will install Git to clone your node.js repository from your GitHub account. To install Git, run the following command.
- sudo yum install git
- This will install the latest version of Git on the instance. Once installation is done, you are ready to clone your repository. Run the following command to clone your repository. Replace <username>with your GitHub username, <repository-name>with the name of your node.js app repository and <folder-name>with the name of the folder you want to clone the repository into. This folder will be created under /home/ec2-user/.
- git clone https://github.com/<username>/<repository-name>.git <folder-name>
- Run cd <folder-name> to move inside this folder and ls to see its contents.
  
## 8. Delete package-lock.json
- rm package-lock.json

## 9. Start the node.js app
- run : npm start
- Add above port 9999 should be allowed in AWS Security group-inbound rule.
- App should run now on port : 9999