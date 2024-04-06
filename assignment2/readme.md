# ASSIGNMENT 2: Automating Anomaly Detection and Alerting in Cloud Security

Group members
Nirmal Ghosh - 041113877
Nidhiben Patel - 041116395
Abhishek Dungrani - 041106130
Divya Shruthi Murisetty - 041059800

## Completion of Assignment 1.
This is the application created in Assignment 1.
![alt text](<WhatsApp Image 2024-04-05 at 7.23.11 PM.jpeg>)


## Preparing for Automation

Virtual Machine created in the lab resource group
![alt text](<WhatsApp Image 2024-04-05 at 7.26.50 PM.jpeg>)

Successfully created the LogAnalytics(syslogAnalytics)
![alt text](<WhatsApp Image 2024-04-05 at 7.29.16 PM.jpeg>)

Successfully created the syslog data collection rule for getting data from the rsyslog in local VM.
![alt text](<WhatsApp Image 2024-04-05 at 7.35.33 PM.jpeg>)

Added a data source(Linux Syslog) and destination(Azure Monitor) in data collection rule.
![alt text](<WhatsApp Image 2024-04-05 at 7.36.15 PM.jpeg>)

Installed Logic Apps Management Solution in LogAnalyticsWorkspace
![alt text](<WhatsApp Image 2024-04-05 at 7.30.03 PM.jpeg>)

We created an Azure Logic App(cst8919) for the anomaly detection workflow.
![alt text](<WhatsApp Image 2024-04-05 at 8.21.21 PM.jpeg>)


## Implementing Anomaly Detection

Anomaly : SeverityLevel of the log is error.

Receiving the syslogs in the Linux Virtual Machine
![alt text](<WhatsApp Image 2024-04-05 at 7.25.08 PM.jpeg>)

### Logic App Designer workflow

Step 1: Added a recurrence activity to trigger the workflow every 5 seconds.
Step 2: Added the 'Run query and list results' action from Azure Monitor. Configured the action to connect to the created Log Analytics
workspace(syslogAnalytics). Add the query 'Syslog | where SeverityLevel contains "error"'.
![alt text](<WhatsApp Image 2024-04-05 at 7.33.47 PM.jpeg>)

Step 3: Used the 'Compose' action in Data Controls to count the number of records being returned using the query.
Step 4: Added a condition 'if number of records greater that or equal to 2'.
![alt text](<WhatsApp Image 2024-04-05 at 7.34.01 PM.jpeg>)

Step 5:If true, configured a send an email activity to trigger an email to 'ozhi0001@algonquinlive.com'
![alt text](<WhatsApp Image 2024-04-05 at 7.34.40 PM.jpeg>)

Anomaly Detection Email
![alt text](<WhatsApp Image 2024-04-05 at 7.21.36 PM.jpeg>)

Successful run of the workflow
![alt text](<WhatsApp Image 2024-04-05 at 8.33.47 PM.jpeg>)

## Integrating Cloud Security Best Practices

### Alert Escalation
Escalation Path for Different Severity Levels of Alerts

1. Informational logs
For example: Non-critical system errors, performance alerts.
Response: Recorded in system logs for periodic review.
Action: No immediate escalation. They can be reviewed during routine system audits.

2. Warning logs
For example: Multiple failed login attempts, unusual application errors.
Response: Email alerts.
Action: Escalate the issue to IT staff or security department.

3. Critical logs
For example: Unauthorised access to sensitive data, breach of firewall.
Response: Immediate automated notifications to the security response team; initiate predefined security protocols.
Action: Initiate emergency response plan including potential service lockdown. Notify executives including managers, directors etc.

4. Urgent Severity - Emergency situation
For example: Active data breach, ransomware attack.
Response: Immediate activation of the crisis management team, including IT, legal, and PR.
Action: CEO and board members are notified. Legal and regulatory notifications proceed according to compliance requirements.

Specific Incident Response Instructions Based on Anomaly Type

Unauthorized Access Attempts:
Immediately invalidate suspect sessions and user credentials.
Perform a security audit to understand the extent of the access and to identify compromised systems.
Update security protocols and train relevant staff on the revised security measures.

Repeated Failed Logins:

Temporarily lock out accounts and IPs involved in the attempts after a threshold is reached.
Notify user and IT security personnel to investigate the source of the attempts.
Review system logs and security settings to strengthen defenses.

Detection of Malware or Unauthorized Software:

Immediately isolate affected systems to prevent spread.
Initiate malware removal processes and conduct a full system scan.
Evaluate the origin and impact of the malware, update antivirus signatures, and patch systems.

Data Exfiltration:

Instantly block data transfer pathways and review all recent transactions and logs.
Determine the data involved and assess the impact, notifying affected parties as required by law.
Review and enhance network security measures, including data loss prevention strategies.

### Regular Updates

1. Stay informed about new threats and vulnerabilities that could affect your systems.
2. Analyze incidents to extract actionable insights and improve future response.
3. Ensure that detection rules are current and effective against the latest threats.
4. Leverage machine learning to improve detection capabilities over time.
5. Maintain comprehensive and up-to-date documentation of all processes.
6. Ensure that all relevant personnel are aware of and trained on the latest detection rules and threat landscapes.


## Best Practices Explanation

The workflow we have developed adheres to cloud security best practices in the following ways:
1. Least Privilege access - The access to the logic app is only given to required individuals with minimum permissions apart from the main admin.
2. Automated security monitoring and alerting - The workflow is configured to run every 5 seconds which ensures timely monitoring of errors in the application.
3. Automated notifications - The workflow sends an email alert to the required parties ensuring that they are informed of any unusual activity.

## Incident Response Plan

The following is a basic incident response plan:

1. Alert Detection and Initial Assessment - Quickly determine the nature and severity of the alert.
Classify the alert based on predefined severity levels (Informational, Warning, Critical, Emergency).

2. Incident Escalation - Escalate the incident to the appropriate team members based on its severity.
For Low and Medium Severity: Notify the operational IT staff or security analysts.
For High and Urgent Severity: Escalate to the senior security team, IT management, and, if necessary, executive levels.

3. Containment and Mitigation - Limit the impact of the incident.
Isolate affected systems to prevent the spread of an attack.
Apply quick fixes or patches to mitigate vulnerabilities.

4. Investigation and Root Cause Analysis - Understand how the breach occurred and gather evidence.
Gather logs, system images, and any relevant data for analysis.
Perform a detailed analysis to identify the root cause of the incident.

5. Recovery and Restoration - Restore affected systems to normal operation.
Restore systems from backups if necessary and remove malware or unauthorized changes.

6. Post-Incident Review - Learn from the incident to prevent future occurrences.
Conduct an analysis to determine what went wrong and why.
Update incident response protocols and detection rules based on findings.

7. Communication - Keep internal and external stakeholders informed as appropriate.
Notify the stakeholders (for example, customers, regulators) about the breach and its impact.
Maintain transparency to uphold trust and comply with regulatory requirements.



