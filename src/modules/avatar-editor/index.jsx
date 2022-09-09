import React from 'react';
import PropTypes from 'prop-types';
// UI
import ReactAvatarEditor from 'react-avatar-editor';
import Button from 'components/button';
import Slider from 'components/slider';
import Typography from 'components/typography';
import Overlay from 'components/overlay';
// Styles
import './styles.sass';
// Assets
import { ReactComponent as PencilIcon } from 'assets/images/icons/pencil.svg';

const AvatarEditor = ({ image }) => {
  const editorRef = React.useRef(null);
  const [defaultAvatar, setDefaultAvatar] = React.useState(image);
  const [editedAvatar, setEditedAvatar] = React.useState(image);
  const [showCropper, setShowCropper] = React.useState(false);
  const [zoom, setZoom] = React.useState(1);

  const handleFileUpload = e => {
    window.URL = window.URL || window.webkitURL;
    let image = window.URL.createObjectURL(e.target.files[0]);
    setShowCropper(true);
    setDefaultAvatar(image);
    setEditedAvatar(image);
    setZoom(1);
  };

  const handleZoomSlider = value => setZoom(value);

  const handleSave = () => {
    const editor = editorRef.current;
    if (editor) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();
      setEditedAvatar(croppedImg);
      setShowCropper(false);
    }
  };

  return (
    <div className="avatar-editor">
      <div className="avatar-editor__box">
        <figure style={{ backgroundImage: `url(${editedAvatar})` }} className="avatar-editor__box-image" />
        <input type="file" accept="image/*" onChange={handleFileUpload} className="avatar-editor__box-input" />
        <div className="avatar-editor__box-overlay">
          <Typography component="span" variant="p-sm" className="text-light">Upload an image</Typography>
        </div>
        <Button className="avatar-editor__box-btn" onClick={() => setShowCropper(true)}>
          <PencilIcon />
        </Button>
      </div>
      {showCropper &&
        <div className="avatar-editor__cropper">
          <Overlay isActive={showCropper} />
          <div className="avatar-editor__cropper-box">
            <ReactAvatarEditor
              ref={editorRef}
              width={250}
              height={250}
              borderRadius={250}
              image={defaultAvatar}
              scale={zoom}
              className="avatar-editor__cropper-editor"
            />
            <div className="avatar-editor__cropper-slider">
              <Slider min={1} max={5} step={0.1} value={zoom} onChange={handleZoomSlider} />
            </div>
            <div className="avatar-editor__cropper-buttons">
              <Button variant="primary" size="xs" className="avatar-editor__cropper-button" onClick={handleSave}>Save</Button>
              <Button variant="primary" size="xs" className="avatar-editor__cropper-button" onClick={() => setShowCropper(false)}>Cancel</Button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

AvatarEditor.propTypes = {
  image: PropTypes.string,
};

export default AvatarEditor;
