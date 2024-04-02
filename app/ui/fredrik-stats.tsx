import React, { useEffect, useState } from 'react';

const GITHUB_TOKEN = '';
const USERNAME = 'fredrir';

type Contributions = {
  totalContributions: number;
};

export function FredrikStats(): JSX.Element {
  const [contributions, setContributions] = useState<Contributions | null>(
    null,
  );

  useEffect(() => {
    const fetchData = async () => {
      const graphqlQuery = {
        query: `
          query {
            user(login: "${USERNAME}") {
              contributionsCollection(from: "${new Date(
                new Date().setFullYear(new Date().getFullYear() - 1),
              ).toISOString()}", to: "${new Date().toISOString()}") {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }
        `,
      };

      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `bearer ${GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(graphqlQuery),
      });

      const responseData = await response.json();
      if (responseData.data && responseData.data.user) {
        setContributions(
          responseData.data.user.contributionsCollection.contributionCalendar,
        );
      }
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div
      className="my-4 rounded border-2 border-white p-4 shadow-lg"
      style={{
        background:
          'linear-gradient(135deg, rgba(25, 0, 51, 0.7), rgba(75, 0, 30, 0.7))',
        maxWidth: '600px',
        minWidth: '400px',
        minHeight: '250px',
      }}
    >
      <p className="text-shadow text-lg font-semibold text-white">
        GitHub Contributions
      </p>
      {contributions ? (
        <p className="text-white">
          Total Contributions in the Last Year:{' '}
          {contributions.totalContributions}
        </p>
      ) : (
        <p className="text-white">Loading contributions...</p>
      )}
    </div>
  );
}
