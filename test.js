const Shipharbor = require('./');
const router = new Shipharbor();

test('router is instance of shipharbor', () => {
  expect(router instanceof Shipharbor).toBeTruthy();
});

test('router can add + match routes', () => {
  expect.assertions(5);

  router.add('/user/:id', params => {
    expect(params.id).toBe('me');
  });

  router.add('/home', () => {
    expect(true).toBeTruthy();
  });

  router.add('/_/*', () => {
    expect(true).toBeTruthy();
  });

  router.match('/home').handler();
  router.match('/_/a').handler();
  router.match('/_/b').handler();
  expect(router.match('/')).toBe(false);

  const u = router.match('/user/me');
  u.handler(u.params);
});
