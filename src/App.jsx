import React, { useEffect, useRef, useState } from 'react';
import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Check,
  Eye,
  FileImage,
  Image as ImageIcon,
  Info,
  ScanEye,
  ShieldCheck,
  Stethoscope,
  Upload,
  X,
} from 'lucide-react';
import anatomyImage from '../example.jpg';

const MAX_FILE_SIZE = 50 * 1024 * 1024;

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} bytes`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

function formatDate(timestamp) {
  if (!timestamp) return 'Not provided';
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(timestamp);
}

function App() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [dimensions, setDimensions] = useState(null);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl('');
      setDimensions(null);
      return undefined;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    const image = new window.Image();
    image.onload = () => setDimensions({ width: image.naturalWidth, height: image.naturalHeight });
    image.onerror = () => setDimensions(null);
    image.src = objectUrl;
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  function addFile(file) {
    setError('');
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setSelectedFile(null);
      setError('Choose an image file to continue.');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      setSelectedFile(null);
      setError('This prototype accepts images up to 50 MB.');
      return;
    }
    setSelectedFile(file);
  }

  function clearFile() {
    setSelectedFile(null);
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function handleDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    addFile(event.dataTransfer.files?.[0]);
  }

  const metadata = selectedFile
    ? [
        ['File name', selectedFile.name],
        ['File size', formatBytes(selectedFile.size)],
        ['Format', selectedFile.type || 'Not reported'],
        ['Image dimensions', dimensions ? `${dimensions.width} × ${dimensions.height} px` : 'Could not read'],
        ['Aspect ratio', dimensions ? `${(dimensions.width / dimensions.height).toFixed(2)} : 1` : 'Could not read'],
        ['Last modified', formatDate(selectedFile.lastModified)],
      ]
    : [];

  return (
    <main>
      <div className="announcement">
        <span className="announcement-dot" />
        <span>Deep Learning-Based Detection of
        Referable DR and
        DME Using UWF Fundus Imaging
        </span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retina home">
          <span className="brand-mark"><Eye size={21} strokeWidth={2.2} /></span>
          <span>retina<span className="brand-period">.</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#conditions">The conditions</a>
          <a href="#screening">Image check</a>
        </nav>
        <a className="header-cta" href="#screening">Try image check <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero section-wrap" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> SEE THE SIGNS SOONER</div>
          <h1>A little more<br />insight can mean<br /><span>a lot more sight.</span></h1>
          <p className="hero-description">Diabetes can quietly affect the retina. Learn what diabetic retinopathy and macular edema can do, and explore how retinal images could support earlier screening.</p>
          <a className="primary-button" href="#conditions">Explore the conditions <ArrowDown size={17} /></a>
          <div className="hero-note"><ShieldCheck size={16} /><span>Early eye exams matter. This prototype does not diagnose.</span></div>
        </div>

        <figure className="anatomy-figure">
          <div className="figure-topline">
            <span>THE HUMAN EYE</span>
            <span className="figure-index">01 / 03</span>
          </div>
          <div className="anatomy-image-wrap">
            <img src={anatomyImage} alt="Illustration showing a cross-section of the eye and a view of the fundus" />
            <span className="image-label"><ScanEye size={15} /> FUNDUS FIELD GUIDE</span>
          </div>
          <figcaption>
            <span>One image. A whole landscape to look after.</span>
            <span className="caption-arrow"><ArrowUpRight size={17} /></span>
          </figcaption>
          <span className="figure-sticker"><Eye size={18} /><span>LOOK<br />CLOSER</span></span>
        </figure>
        <div className="hero-index">01 <span>—</span> 03</div>
      </section>

      <section className="conditions-section" id="conditions">
        <div className="section-wrap conditions-inner">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> KNOW WHAT TO LOOK FOR</div>
              <h2>Diabetes can change<br />the view from within.</h2>
            </div>
            <p>Changes can begin before you notice symptoms. Regular, dilated eye exams help find problems early, when care can help protect vision.</p>
          </div>

          <div className="condition-grid">
            <article className="condition-card dr-card">
              <div className="condition-card-head">
                <span className="condition-icon dr-icon"><Activity size={21} /></span>
                <span className="condition-code">01 / DR</span>
              </div>
              <h3>Diabetic<br />retinopathy</h3>
              <p>High blood sugar can damage the tiny blood vessels in the retina. They may leak, close off, or grow abnormally.</p>
              <div className="condition-foot"><span>CAN THREATEN VISION</span><ArrowUpRight size={17} /></div>
            </article>
            <article className="condition-card dme-card">
              <div className="condition-card-head">
                <span className="condition-icon dme-icon"><ScanEye size={21} /></span>
                <span className="condition-code">02 / DME</span>
              </div>
              <h3>Diabetic macular<br />edema</h3>
              <p>Leaking vessels can cause swelling in the macula, the part of the retina used for sharp, central vision.</p>
              <div className="condition-foot"><span>CAN BLUR CENTRAL VISION</span><ArrowUpRight size={17} /></div>
            </article>
            <aside className="care-note">
              <span className="care-note-icon"><Stethoscope size={21} /></span>
              <div className="care-note-label">A NOTE ON URGENCY</div>
              <h3>Vision loss can be permanent. Early care can make a difference.</h3>
              <p>These conditions are not usually fatal, but untreated disease can cause severe, irreversible vision loss. Speak with an eye-care professional about regular screening.</p>
              <a href="#screening">Explore image check <ArrowUpRight size={16} /></a>
            </aside>
          </div>
          <div className="source-note"><Info size={14} /> Educational information only. Screening and treatment decisions belong with a qualified eye-care professional.</div>
        </div>
      </section>

      <section className="screening-section" id="screening">
        <div className="section-wrap screening-inner">
          <div className="screening-intro">
            <div className="eyebrow"><span className="eyebrow-line" /> A LOCAL IMAGE CHECK</div>
            <h2>Bring an image.<br /><span>See what we can read.</span></h2>
            <p>Choose a retinal image to inspect its basic file details. This is a front-end demonstration only: no deep-learning model is connected and no diagnosis will be generated.</p>
            <div className="privacy-line"><ShieldCheck size={17} /><span>Your image stays in this browser. It is not uploaded or stored.</span></div>
          </div>

          <div className="upload-panel">
            <div className="upload-panel-top">
              <span><span className="status-dot" /> IMAGE WORKSPACE</span>
              <span>LOCAL MODE</span>
            </div>
            {!selectedFile ? (
              <div
                className={`dropzone${isDragging ? ' is-dragging' : ''}`}
                onDragOver={(event) => { event.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                <div className="upload-icon"><Upload size={23} /></div>
                <h3>Drop your image here</h3>
                <p>or choose a file from your device</p>
                <button className="choose-button" type="button" onClick={() => fileInputRef.current?.click()}>
                  <ImageIcon size={16} /> Choose image
                </button>
                <input
                  ref={fileInputRef}
                  className="visually-hidden"
                  type="file"
                  accept="image/*"
                  aria-label="Choose a retinal image"
                  onChange={(event) => addFile(event.target.files?.[0])}
                />
                <span className="file-hint">IMAGE FILES · UP TO 50 MB</span>
                {error && <p className="upload-error" role="alert">{error}</p>}
              </div>
            ) : (
              <div className="file-inspection">
                <div className="file-preview">
                  {previewUrl && <img src={previewUrl} alt={`Preview of ${selectedFile.name}`} />}
                  {!previewUrl && <FileImage size={34} />}
                  <span className="preview-badge"><Check size={13} /> FILE READY</span>
                </div>
                <div className="metadata-header">
                  <div><span className="metadata-kicker">IMAGE DETAILS</span><h3>{selectedFile.name}</h3></div>
                  <button className="icon-button" type="button" onClick={clearFile} aria-label="Remove selected image" title="Remove image"><X size={18} /></button>
                </div>
                <dl className="metadata-grid">
                  {metadata.map(([label, value]) => (
                    <div className="metadata-item" key={label}>
                      <dt>{label}</dt>
                      <dd title={value}>{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="analysis-placeholder"><Info size={16} /><span>Model analysis is not available in this demo.</span></div>
              </div>
            )}
            <div className="upload-panel-bottom"><span><ShieldCheck size={14} /> PRIVATE BY DESIGN</span><span>NO SERVER CONNECTION</span></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#top"><span className="brand-mark"><Eye size={19} /></span><span>retina<span className="brand-period">.</span></span></a>
          <p>A learning prototype for earlier conversations about eye health.</p>
          <a href="#top" className="back-top">BACK TO TOP <ArrowUpRight size={15} /></a>
          <span className="footer-disclaimer">Not for diagnosis or treatment.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;