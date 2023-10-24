const Podcast = require("./Podcast")
const Media = require('./Media')

test('Podcast listen method returns the correct summary', () => {
    const podcast1 = new Podcast("title", 1982, "boring", "not_art", 483, "host", "episodename", 66, ["guest1", "guest2"])
    expect(podcast1.listen()).toBe(
      'title - Episode: episodename. Hosted by host and featuring guests guest1, guest2. Length: 483 seconds.'
    )
  })

