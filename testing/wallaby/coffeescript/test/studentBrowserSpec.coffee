
describe 'Student', ->
  it 'should report grade', ->
    student = new Student score: 75;
    expect(student.grade()).toBe('C')