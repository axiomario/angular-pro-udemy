import { sleep } from "@/github-issues/helpers/sleep";
import { GitHubIssue } from "../interfaces";
import { environment } from "src/environments/environment";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;

export const getIssueComments = async (id: string): Promise<GitHubIssue[]> => {
  await sleep(2);
  try {
    const resp = await fetch(`${ BASE_URL }/issues/${ id }/comments`, {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    });

    if (!resp.ok) throw "Can't load issue comments";

    return await resp.json() as GitHubIssue[];
  } catch (error) {
    throw "Can't load issue comments";
  }
};