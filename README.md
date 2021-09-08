# AcidRain
Simple clone coding of the game 'acid rain'

## to fix   
- [ ] initializer.js : fix the way it rearranges words when resizing occurs to act as efficient as possible.   
  + In current way, delay would be occurred if the number of words increases.   
- [ ] style.css : make replay more fancy 

## to add   
- [x] countdown   
- [ ] timeout: occur when clearInterval is ran. make gameover pop up(words left > 0).   
- [ ] make words move down to helper(or specific point).   
- [ ] make words disappear when it reaches the helper(or when it is positioned at specific point).   
- [ ] check the number of words left, removed by pc, removed by userinput.   
      - total words === words removed by user : clear!   
      - total words/2 < words removed by pc : gameover   
      - damage100% === words removed by pc / (total words/2)
- [ ] damage up   
- [ ] level up? make words move faster   
