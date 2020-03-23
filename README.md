# #HowCanIHelp Bot

```flow
st=>start: Join Group
en=>end: Leave Group
q1=>inputoutput: Ask Location Of User Agent
q2=>inputoutput: Ask How User Can Help (Free Text Field)
s1=>operation: Store User Info , Location & Expertise
l0=>inputoutput: Check For Messages
l1=>condition: Check Any Message For #howcanihelp
s2=>operation: Extract And Store Information In DB For Moderator To Decide
s3=>operation: Do Nothing 

st->q1->q2->s1->l0->l1
l1(yes)->s2->l0
l1(no)->s3->l0
```

