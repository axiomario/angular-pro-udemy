import { environment } from "src/environments/environment";
import { getIssueById } from "./get-issue-by-id.action";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.githubToken;
const id = '123';
const mockIssue = {
  id: Number(id),
  number: id,
  body: '# Hello world'
};

describe('GetIssueById', () => {
  it('should fetch issue successfully', async () => {
    const url = `${ BASE_URL }/issues/${ id }`;
    const response = new Response(JSON.stringify(mockIssue), {
      status: 200,
      statusText: 'OK'
    });

    spyOn(window, 'fetch').and.resolveTo(response);

    const issue = await getIssueById(id);

    expect(window.fetch).toHaveBeenCalledWith(url, {
      headers: {
        Authorization: `Bearer ${ GITHUB_TOKEN }`
      }
    });
  });

  it('should catch issue exception', async () => {
    const url = `${ BASE_URL }/issues/${ id }`;
    const response = new Response(null, {
      status: 404,
      statusText: 'NOT_FOUND'
    });

    spyOn(window, 'fetch').and.resolveTo(response);

    try {
      const issue = await getIssueById(id);
    } catch (error) {
      expect(error).toBe("Can't load issue");
    }
  });
});
