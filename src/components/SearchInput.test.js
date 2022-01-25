
import React from 'react';
import renderer from 'react-test-renderer';
import SearchInput from './SearchInput';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <SearchInput
      id="search-input"
      value={"cats"}
      onChange={() => void 0}
      loadTrending={() => void 0}
      onSearchClick={() => void 0}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});