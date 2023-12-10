import * as mm from "music-metadata";
import got from "got";

export async function getAudioMetadata(
  url,
  parseOptions = { duration: true, skipCovers: true }
) {
  if (url.startsWith("http")) {
    const body = await got(url).buffer();

    if (body) {
      return await mm.parseBuffer(body, "audio/mpeg", parseOptions);
    }
  }
}
