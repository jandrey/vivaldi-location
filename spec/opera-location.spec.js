/* eslint-env jasmine */
const fs = require('fs')
const mock = require('mock-require');
const vivaldiLocation = require('../module')

describe('vivaldi-location', function () {
  // Must have vivaldi installed. Commented as GitHub CI doesn't have it.
  // it('outputs vivaldi path as a node module', function (done) {
  //   const location = vivaldiLocation()

  //   expect(fs.existsSync(location)).toBe(true)
  //   expect(location).toBeDefined()
  //   done()
  // })

  it('outputs vivaldi path as a cli', function (done) {
    mock('child_process', {
      spawnSync: (location) => {
        return {stdout: location}
      }
    });

    const location = vivaldiLocation()

    const { spawnSync } = require( 'child_process' );
    const output = spawnSync(location);

    expect(output.stdout).toBe(location)
    done()
  })
})
