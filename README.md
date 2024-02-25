# se_network-search-pagination-fix
Network search pagination on stackexchange.com is broken and does not count pages correctly. 

See https://meta.stackexchange.com/questions/359216/pagination-on-stackexchange-com-search-is-broken


This is a fix: it forces the `pagesize` parameter in the query string to be always set. 

 - If it's missing, it gets set to 15 (the default that the search uses anyway). 
 - If already present, it does not get changed.
 - Changes all buttons for navigation to also carry the parameter.
