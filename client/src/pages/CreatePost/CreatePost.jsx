import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import preview from '../../assets/preview.png';
import { getRandomPrompt } from '../../utils/index';
import FormField from '../../components/FormField/FormField';
import Loader from '../../components/Loader/Loader';

import styles from './CreatePost.module.scss';

function CreatePost() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', prompt: '', photo: '' });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {};

  const handleSubmit = () => {};

  const handleChange = evt => {
    setForm({ ...form, [evt.target.name]: evt.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

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
          <div className={styles.www}>
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className={styles.photo}
              />
            ) : (
              <img src={preview} alt="preview" className={styles.preview} />
            )}

            {generatingImg && (
              <div className={styles.imgLoader}>
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className={styles.generate}>
          <button type="button" onClick={generateImage}>
            {generatingImg ? 'Generating...' : 'Generate'}
          </button>
        </div>

        <div className={styles.submit}>
          <p>
            Once you have created the image you want, you can share it with
            others in the community
          </p>
          <button type="submit">
            {loading ? 'Sharing...' : 'Share with the community'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default CreatePost;
