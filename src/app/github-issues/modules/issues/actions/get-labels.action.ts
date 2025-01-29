import { sleep } from "@/github-issues/helpers/sleep";
import { GitHubLabel } from "../interfaces";
import { environment } from "src/environments/environment";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getLabels = async (): Promise<GitHubLabel[]> => {
  //await sleep(2);
  try {
    const resp = await fetch(`${ BASE_URL }/labels`, {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    });

    if (!resp.ok) throw "Can't load labels";

    return await resp.json() as GitHubLabel[];
  } catch (error) {
    throw "Can't load labels";
  }
};
