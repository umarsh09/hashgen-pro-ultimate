/**
 * DeepSeek AI Service
 * Handles all API calls to DeepSeek AI for hashtag and content generation
 */

const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;
const DEEPSEEK_API_URL = import.meta.env.VITE_DEEPSEEK_API_URL || 'https://api.deepseek.com/v1';

/**
 * Generate hashtags using DeepSeek AI
 * @param {string} description - The project or content description
 * @param {string} platform - Target platform (instagram, twitter, linkedin, etc.)
 * @param {number} count - Number of hashtags to generate (default: 15)
 * @returns {Promise<Array<string>>} - Array of generated hashtags
 */
export const generateHashtags = async (description, platform = 'instagram', count = 15) => {
  try {
    const response = await fetch(`${DEEPSEEK_API_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `You are a professional social media hashtag expert specializing in construction and building industry content. Generate relevant, trending, and effective hashtags for ${platform}.`
          },
          {
            role: 'user',
            content: `Generate ${count} highly relevant and engaging hashtags for the following construction project description: "${description}".

            Requirements:
            - Mix popular hashtags with niche-specific ones
            - Include construction-related hashtags
            - Consider the platform: ${platform}
            - Make them searchable and trending
            - Each hashtag should start with #
            - Return ONLY the hashtags, one per line, no numbering or additional text`
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || '';

    // Parse hashtags from response
    const hashtags = content
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.startsWith('#'))
      .slice(0, count);

    return hashtags;
  } catch (error) {
    console.error('Error generating hashtags:', error);
    throw error;
  }
};

/**
 * Generate content description using DeepSeek AI
 * @param {string} keywords - Keywords or brief description
 * @param {string} tone - Content tone (professional, casual, enthusiastic, etc.)
 * @returns {Promise<string>} - Generated content description
 */
export const generateContent = async (keywords, tone = 'professional') => {
  try {
    const response = await fetch(`${DEEPSEEK_API_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `You are a professional construction and building industry content writer. Create engaging social media post descriptions with a ${tone} tone.`
          },
          {
            role: 'user',
            content: `Create an engaging social media post description for a construction project based on these keywords: "${keywords}".

            Requirements:
            - Keep it concise (2-3 sentences, max 280 characters)
            - Use a ${tone} tone
            - Make it engaging and shareable
            - Focus on construction/building industry
            - Do not include hashtags in the description`
          }
        ],
        temperature: 0.8,
        max_tokens: 300
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || '';

    return content.trim();
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
};

/**
 * Analyze hashtag performance and suggest improvements
 * @param {Array<string>} hashtags - Array of hashtags to analyze
 * @returns {Promise<Object>} - Analysis results with suggestions
 */
export const analyzeHashtags = async (hashtags) => {
  try {
    const response = await fetch(`${DEEPSEEK_API_URL}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: 'You are a social media hashtag analytics expert. Analyze hashtag sets and provide actionable insights.'
          },
          {
            role: 'user',
            content: `Analyze these hashtags: ${hashtags.join(', ')}.

            Provide:
            1. Overall effectiveness score (1-10)
            2. Mix quality (popular vs niche)
            3. Top 3 suggestions for improvement

            Format as JSON: {"score": number, "mixQuality": "good/needs improvement", "suggestions": [string, string, string]}`
          }
        ],
        temperature: 0.5,
        max_tokens: 400
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || '{}';

    // Try to parse JSON response
    try {
      return JSON.parse(content);
    } catch {
      return {
        score: 7,
        mixQuality: 'good',
        suggestions: ['Consider adding location-specific hashtags', 'Mix trending and evergreen hashtags', 'Include industry-specific terms']
      };
    }
  } catch (error) {
    console.error('Error analyzing hashtags:', error);
    throw error;
  }
};

export default {
  generateHashtags,
  generateContent,
  analyzeHashtags
};
