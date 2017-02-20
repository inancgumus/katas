import renderer from 'react-test-renderer'

export const expectToMatchSnapshot = el =>
  expect(
    renderer.create(el).toJSON()
  ).toMatchSnapshot()
