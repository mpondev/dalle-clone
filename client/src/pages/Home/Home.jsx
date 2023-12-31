import { useEffect, useState } from 'react';

import Loader from '../../components/Loader/Loader';
import Card from '../../components/Card/Card';
import FormField from '../../components/FormField/FormField';

import styles from './Home.module.scss';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map(post => <Card key={post._id} {...post} />);
  }
  return <h2 className={styles.title}>{title}</h2>;
};

function Home() {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  const [searchText, setSearchText] = useState('');
  return (
    <main>
      <section>
        <div>
          <h1>The Community Showcase</h1>
          <p>
            Browse through a collection of imaginative and visually stunning
            images generated by DALL·E AI
          </p>
        </div>

        <div className={styles.form}>
          <FormField />
        </div>

        <div className={styles.aaa}>
          {loading ? (
            <div className={styles.bbb}>
              <Loader className={styles.loader} />
            </div>
          ) : (
            <>
              {searchText && (
                <h2>
                  Showing results for <span>{searchText}</span>
                </h2>
              )}
              <div className={styles.ccc}>
                {searchText ? (
                  <RenderCards data={[]} title="No search results found" />
                ) : (
                  <RenderCards data={[]} title="No posts found" />
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

export default Home;
