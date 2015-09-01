Student = require '../src/studentNode'
chai = require('chai')
expect = chai.expect

describe 'Student', ->
  it 'should report grade', ->
    student = new Student score: 75
    expect(student.grade()).to.equal('C')

  it 'should be a hardworking student if grade is A', ->
    student = new Student score: 90
    expect(student.isHardworking()).to.be.true

  it 'should be a lazy student if grade is below C', ->
    student = new Student score: 69
    expect(student.isLazy()).to.be.true

  # ----------- EDGE CASES ----------- #

  it 'should report grade as A when score is above 100', ->
    student = new Student score: 101
    expect(student.grade()).to.equal('A')

  it 'should report grade as F when score is below 0', ->
    student = new Student score: -1
    expect(student.grade()).to.equal('F')

  it 'should not be a hardworking student if grade is below A', ->
    student = new Student score: 89
    expect(student.isHardworking()).to.be.false
