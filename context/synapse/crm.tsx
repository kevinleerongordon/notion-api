import axios from "axios";


const notionApiKey = process.env.notion_key!;
const marketing_crm_contacts_database_id =
  process.env.marketing_crm_contacts_database_id!;

export interface NewRecordType {
  "Email Address": { email: string };
  Company: {
    has_more: boolean;
    id: string;
    type: string;
    relation: [{ id: string }];
  };
  "Converted to Opportunity": { checkbox: boolean };
  Owner: { id: string; type: string; people: [] };
  Title: {
    id: string;
    rich_text: { text: { content: string } }[];
    type: string;
  };
  Message: {
    id: string;
    rich_text: { text: { content: string } }[];
    type: string;
  };
}

export interface CreatePageParams {
  newRecord: NewRecordType;
}

export async function addToMarketingCrm({
  newRecord,
}: CreatePageParams): Promise<void> {
  const headers = {
    "Notion-Version": "2021-08-16",
    Authorization: `Bearer ${notionApiKey}`,
    "Content-Type": "application/json",
  };
  const config = {
    headers,
    withCredentials: true,
  };
  const response = await axios.post(
    `https://api.notion.com/v1/pages`,
    {
      parent: {
        database_id: marketing_crm_contacts_database_id,
      },
      properties: newRecord,
    },
    config,
  );
  return response.data;
}

export async function getDatabase({
  databaseId,
}: {
  databaseId: string;
}): Promise<any> {
  const headers = {
    "Notion-Version": "2021-08-16",
    Authorization: `Bearer ${notionApiKey}`,
  };

  const response = await axios.get(
    `https://api.notion.com/v1/databases/${databaseId}`,
    { headers },
  );

  return response.data;
}




