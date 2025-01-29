import { environment } from "src/environments/environment";
import { getIssueComments } from "./get-issue-comments.action";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;
const id = '123';
const mockComments: any[] = [
  { id: 1, body: 'First', user: { login: 'user1' } },
  { id: 2, body: 'Second', user: { login: 'user2' } },
];

describe('GetIssueComments', () => {
  it('should fetch issue comments successfully', async () => {
    const url = `${ BASE_URL }/issues/${ id }/comments`;
    const response = new Response(JSON.stringify(mockComments), {
      status: 200,
      statusText: 'OK'
    });

    spyOn(window, 'fetch').and.resolveTo(response);

    const comments = await getIssueComments(id);

    expect(window.fetch).toHaveBeenCalledWith(url, {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    });
  });

  it('should catch issue comments exception', async () => {
    const url = `${ BASE_URL }/issues/${ id }/comments`;
    const response = new Response(null, {
      status: 404,
      statusText: 'NOT_FOUND'
    });

    spyOn(window, 'fetch').and.resolveTo(response);

    try {
      const comments = await getIssueComments(id);
    } catch (error) {
      expect(error).toBe("Can't load issue comments");
    }
  });
});
