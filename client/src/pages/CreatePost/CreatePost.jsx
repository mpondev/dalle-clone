import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import preview from assets
import { getRandomPrompt } from '../../utils/index';
import FormField from '../../components/FormField/FormField';
import Loader from '../../components/Loader/Loader';

import styles from './CreatePost.module.scss';

function CreatePost() {
  const navigate = useNavigate();
  const [form, setform] = useState({ name: '', prompt: '', photo: '' });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  const handleChange = evt => {
    evt.preventDefault();
  };

  const handleSurpriseMe = () => {};

  return (
    <section className={styles.create}>
      <div>
        <h1>Create</h1>
        <p>
          Create imaginative and visually stunning images through DALL·E AI and
          share them with the community
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.formFields}>
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A plush toy robot sitting against a yellow wall"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>
      </form>
    </section>
  );
}

export default CreatePost;
