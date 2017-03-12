# CSCI3800HW3
HW3 for Web Api

Give	one	reason	(there	are	many)	OAuth	tokens	should	 not	be	granted	in	the	main	flow,	
assuming	the	user	has	sent	in	the	correct	credentials.
-The reason why is because oauth isn't perfectly secure and having it on your main flow can create vulnerabilities within your main proxy. Thus you would rather do it on a separate proxy to minimize damages should you be using oauth tokens.
