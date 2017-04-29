botot

BUGS:

* '*help' produces a '3Error: Bad Request'
   - The bot was trying to DM itself so it gave the error '3Error: Bad Request' this is solved by adding one line of code "if (message.author.bot) return;"

TODO:

* refactor code
  - in progress

* adjust paths to relative ('./') instead of absolute
  - done jwl/Mar 27 2017


* check file locking
  - not neccesary 
* migrate to DB (MySQL/MariaDB preferred)
  - DB is set up correctly, now we only need to use it
* find independent hosting partner
   - done 

