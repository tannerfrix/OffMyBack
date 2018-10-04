select allrequests.name, allrequests.phone, allrequests.address, allrequests.city, allrequests.state, allrequests.zipcode, 
allrequests.email, ombrequest.itemid from allrequests full join ombrequest on allrequests.reqid = ombrequest.reqid
where ombrequest.itemid = $1;