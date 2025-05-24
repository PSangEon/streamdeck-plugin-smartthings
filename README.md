# Smartthings plugin for StreamDeck

A StreamDeck plugin to control your smartthings devices and scenes.

Donwload the release from https://github.com/thibautsabot/streamdeck-plugin-smartthings/releases

Open `com.thibautsabot.streamdeck.smartthings.streamDeckPlugin` and install the plugin !

---

Chose what you need from the list :

<img width="264" alt="Screenshot 2021-03-29 at 11 10 38" src="https://user-images.githubusercontent.com/9283289/112819301-bd3e6d80-9084-11eb-86bd-a6e015268c9f.png">


Add your smartthings personal access token and get everything from your hub !

<img width="484" alt="Screenshot 2021-03-29 at 11 11 33" src="https://user-images.githubusercontent.com/9283289/112819309-c0395e00-9084-11eb-8bec-68d0f7cd8527.png">

## Access via Proxy Server

To fetch devices and scenes from your SmartThings hub, you need a **proxy server URL**.

We provide an example proxy server here:  
👉 https://github.com/PSangEon/smartthigs-proxy

Set up and run this proxy server by following the instructions in the repository.

Once running, copy the base URL of your proxy (for example: `https://your-proxy-server.com`).

Enter this URL into the plugin or client that connects to SmartThings.

✅ The proxy server will handle OAuth tokens securely on your behalf.

**⚠️ Important:**  
Only use proxy servers you trust.  
The proxy has permission to control your devices, so keep the connection and server secure.

## Informations

This project is branched from:  
https://github.com/thibautsabot/typescript-streamdeck-boilerplate/

The reason for this fork is due to recent changes by Samsung SmartThings,  
where **personal access tokens now expire after 24 hours**.  
Because of this, a full **OAuth authentication flow** is required to ensure stable and secure long-term access.

To handle this, we have added a **proxy server example** that manages OAuth on behalf of the client,  
and the plugin is now designed to receive a **proxy server URL** instead of directly handling tokens.

You can find the proxy server here:  
👉 https://github.com/PSangEon/smartthigs-proxy

⚠️ Please note:  
I have made only **minor code modifications** in this fork.  
Depending on the original repository owner's request, the public availability or details of this fork **may change** in the future.
