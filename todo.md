-   [ ] set up nodemon.json
-   [ ] set up yarn dev command
-   [ ] figure out game loop - events sent out by server, and clients just have to fucking deal with it:

# Game loop

-   initialization of game
    -   starting new game
    -   sending out bingo cards
        -   send bingo card to each connected client
        -   store bingo card in game array somewhere
-   main game loop
    -   call out letter/number combo
        -   (wait 15 seconds)
        -   client: if the letter/number combo is on the card, send an affirmative response back to Server
            -   client: check if you've got bingo. if so, send a bingo response to the server
        -   client : if the letter/number combo is _not_ on the card, send a negative response back to the server
        -   if you get a response from all clients, start the next round
    -   server: if you get a bingo response:
        -   stop all calling and timers
        -   check to see if the specified bingo card actually has all the numbers called
        -   if so, `ANNOUNCE_WINNER` and restart game
        -   if not, ignore and restart timers
