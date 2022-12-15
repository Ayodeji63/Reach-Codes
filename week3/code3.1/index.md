1.  assert(winner(SCISSOR, PAPER) == A_WINS);
    assert(winner(PAPER, SCISSOR) == B_WINS);
    assert(winner(SCISSOR, SCISSOR) == DRAW);

After changing the parameters of the assert statement to the code above, running the program with ./reach run.
It works as usually because the assert statements are correct.

2.

assert(winner(PAPER, PAPER) == A_WINS);

Breaking the assert statement on line one, the error outputs was,

`Verifying knowledge assertions
Verifying for generic connector
Verifying when ALL participants are honest
Verification failed:
when ALL participants are honest
of theorem: assert
at ./index.rsh:12:7:application

assert(false);

Verifying when NO participants are honest
Checked 78 theorems; 2 failures (and 1 omitted repeats) :'(`

Line 1 erro message:
Verifying knowledge assertions
Reach verify engine starts to checks the knowledge assertions that are introduced by unknowable.

Line 2 error message:
Verrifying for generic connector
The verify engine start checking the body of the code using generic network, for example, the value of UInt in the program.

Line 3 erro message:
Verifying when all Participants are honest
This means it will trust assume statements and try to enforce require statements.

Line 4 of the error message
Verification failed:

This is the block the error lies,
First it will tell that "verification failed", then the mode "when all Participants are honest", next it tells what type of theorem it is "assert theorem" in our case, finally it tells where the failure occurred in the program,

Line 5 of the erro message:
After showing where the error occured, Reach switches to show the way it has represented the theorem, "assert(false)"

The rest of the output shows that the other mode is checked ans summarises the run.

3. The error messages shows that the assert statement on line 12 of the rsh is false:

This can be fixed by changing the statement to:

assert(winner(PAPER, PAPER) == DRAW);

If both player choose PAPER the output will be draw.
