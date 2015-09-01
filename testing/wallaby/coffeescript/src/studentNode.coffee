class Student
  constructor: (options) ->
    {@name, @age, @score} = options

  grade: ->
    switch
      when @score < 60 then 'F'
      when @score < 70 then 'D'
      when @score < 80 then 'C'
      when @score < 90 then 'B'
      else
        'A'

  isHardworking: ->
    @grade() is 'A'

  isLazy: ->
    @grade() is ('D' or 'F')
    

module.exports = Student
