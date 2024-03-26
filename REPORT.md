ASSIGNMENT 1 REPORT

Group members
Nirmal Ghosh - 041113877
Nidhiben Patel - 041116395
Abhishek Dungrani - 041106130
Divya Shruthi Murisetty - 041059800

To create an application we used the angular framework and integrated Gmail for SSO authentication using OAuth 2.0.
![alt text](<Screenshot 2024-03-25 220928 2.png>)
![alt text](<Screenshot 2024-03-25 221001 2.png>)
![alt text](<Screenshot 2024-03-25 221025 2.png>)
![alt text](<Screenshot 2024-03-25 220750 2.png>)

Created the image and containerized the app in Docker

Installed minikube to deploy it to Kubernetes
![alt text](<image (14).png>)

This image shows the context that kubectl is currently using.
So our deployment will go to the cluster that will be created using the deployment file
![alt text](<image (15).png>)

Successfull docker image build
![alt text](<image (16).png>)

Command for getting current running services
![alt text](<image (17).png>)

login step 1 successful in the cluster, achieved by adding required address in google cloud console
![alt text](<image (18).png>)

Successfull login in the website using google sso in kubernetes cluster
![alt text](<image (19).png>)

Integrated rsyslog into the app.module.ts file to receive logs when logging in and out.
![alt text](<image (13).png>)

The error that we found as to why we couldn't send the logs from the web app to the rsyslog was that the protocols mismatched. So we needed to create a server inbetween to handle that traffic.The web app was incapable of sending data from an http protocol to an rsyslog server that took data using udp and tcp protocols.
![alt text](<image (20).png>)

Created the virtual machine in Azure
![alt text](<Screenshot (3) (1).png>)

Added an inbound rule to allow port 3000 for opening Grafana
![alt text](<Screenshot (4) (1).png>)
![alt text](<Screenshot (2) (1).png>)

Able to open Grafana dashboard
![alt text](<Screenshot (2) (1)-1.png>)