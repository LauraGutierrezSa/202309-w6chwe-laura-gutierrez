export function mockFetch(data: unknown) {
  return jest.fn().mockImplementation(async () =>
    Promise.resolve({
      ok: true,
      json: () => data,
    }),
  );
}
